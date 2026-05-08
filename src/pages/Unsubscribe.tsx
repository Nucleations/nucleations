import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/SiteHeader';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const FN_URL = `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`;

type State =
  | { kind: 'loading' }
  | { kind: 'invalid'; message: string }
  | { kind: 'already' }
  | { kind: 'ready' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get('token');
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    if (!token) {
      setState({ kind: 'invalid', message: 'This unsubscribe link is missing its token.' });
      return;
    }
    (async () => {
      try {
        const res = await fetch(`${FN_URL}?token=${encodeURIComponent(token)}`, {
          headers: { apikey: SUPABASE_ANON },
        });
        const data = await res.json();
        if (!res.ok) {
          setState({ kind: 'invalid', message: data?.error || 'This unsubscribe link is invalid or expired.' });
          return;
        }
        if (data?.valid === false && data?.reason === 'already_unsubscribed') {
          setState({ kind: 'already' });
          return;
        }
        if (data?.valid === true) {
          setState({ kind: 'ready' });
          return;
        }
        setState({ kind: 'invalid', message: 'This unsubscribe link is invalid.' });
      } catch {
        setState({ kind: 'error', message: 'We could not verify your unsubscribe link. Please try again.' });
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState({ kind: 'submitting' });
    try {
      const res = await fetch(FN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data?.success) {
        setState({ kind: 'success' });
      } else if (data?.reason === 'already_unsubscribed') {
        setState({ kind: 'already' });
      } else {
        setState({ kind: 'error', message: data?.error || 'Could not complete the unsubscribe request.' });
      }
    } catch {
      setState({ kind: 'error', message: 'Could not complete the unsubscribe request.' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-xl mx-auto px-6 py-24">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-10 shadow-elegant text-center space-y-6">
          <h1 className="text-3xl font-bold text-foreground">Email preferences</h1>

          {state.kind === 'loading' && (
            <p className="text-muted-foreground">Verifying your unsubscribe link…</p>
          )}

          {state.kind === 'ready' && (
            <>
              <p className="text-muted-foreground">
                Click below to confirm you'd like to stop receiving emails from Nucleations at this address.
              </p>
              <Button onClick={confirm} size="lg" className="rounded-xl">
                Confirm unsubscribe
              </Button>
            </>
          )}

          {state.kind === 'submitting' && (
            <p className="text-muted-foreground">Processing…</p>
          )}

          {state.kind === 'success' && (
            <p className="text-foreground">
              You've been unsubscribed. You will no longer receive emails from Nucleations at this address.
            </p>
          )}

          {state.kind === 'already' && (
            <p className="text-foreground">
              This address is already unsubscribed — no further action needed.
            </p>
          )}

          {(state.kind === 'invalid' || state.kind === 'error') && (
            <p className="text-destructive">{state.message}</p>
          )}

          <div>
            <Link to="/" className="text-sm text-primary hover:underline">
              Back to nucleations.com
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Unsubscribe;
