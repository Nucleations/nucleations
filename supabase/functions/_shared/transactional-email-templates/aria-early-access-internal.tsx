import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  company?: string
  role?: string
  message?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Section style={row}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={rowValue}>{value && value.trim() ? value : '—'}</Text>
  </Section>
)

const AriaEarlyAccessInternal = (p: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New ARIA Early Access request from {p.name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New ARIA early access request</Heading>
        <Text style={lede}>Someone just requested early access to ARIA on nucleations.com.</Text>
        <Hr style={hr} />
        <Row label="Full name" value={p.name} />
        <Row label="Work email" value={p.email} />
        <Row label="Company" value={p.company} />
        <Row label="Role" value={p.role} />
        <Row label="Workflow they want to transform" value={p.message} />
        <Hr style={hr} />
        <Text style={footer}>Nucleations · ARIA early access notification</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AriaEarlyAccessInternal,
  subject: (d: Record<string, any>) =>
    `ARIA early access request — ${d.name || 'visitor'}${d.company ? ` (${d.company})` : ''}`,
  displayName: 'ARIA early access — internal notification',
  previewData: {
    name: 'John Smith',
    email: 'john@enterprise.com',
    company: 'Enterprise Co.',
    role: 'Director of Transformation',
    message: 'Customer onboarding workflow across 3 regions.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '32px 28px' }
const h1 = { fontSize: '24px', fontWeight: 700, color: '#3a0676', margin: '0 0 8px' }
const lede = { fontSize: '14px', color: '#55575d', margin: '0 0 16px' }
const hr = { borderColor: '#ece6f4', margin: '20px 0' }
const row = { margin: '0 0 14px' }
const rowLabel = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: '#7d6f95', margin: '0 0 2px' }
const rowValue = { fontSize: '14px', color: '#1a0533', margin: 0, whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '12px', color: '#999', margin: '20px 0 0' }
