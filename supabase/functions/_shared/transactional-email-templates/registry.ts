/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as contactInternalNotification } from './contact-internal-notification.tsx'
import { template as contactSubmitterConfirmation } from './contact-submitter-confirmation.tsx'
import { template as ariaEarlyAccessInternal } from './aria-early-access-internal.tsx'
import { template as ariaEarlyAccessConfirmation } from './aria-early-access-confirmation.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-internal-notification': contactInternalNotification,
  'contact-submitter-confirmation': contactSubmitterConfirmation,
  'aria-early-access-internal': ariaEarlyAccessInternal,
  'aria-early-access-confirmation': ariaEarlyAccessConfirmation,
}
