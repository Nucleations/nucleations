import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props { name?: string }

const AriaEarlyAccessConfirmation = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for requesting early access to ARIA</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{name ? `Thanks, ${name}!` : 'Thanks for your interest in ARIA!'}</Heading>
        <Text style={text}>
          We've received your request for early access to <strong>ARIA</strong>, the AI Readiness Intelligence Assessment from Nucleations.
        </Text>
        <Text style={text}>
          Our team will review your request and reach out shortly with next steps, including a short conversation to understand the workflow you'd like to transform.
        </Text>
        <Text style={signoff}>— The Nucleations team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AriaEarlyAccessConfirmation,
  subject: 'Your ARIA early access request',
  displayName: 'ARIA early access — submitter confirmation',
  previewData: { name: 'John' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '40px 28px' }
const h1 = { fontSize: '24px', fontWeight: 700, color: '#3a0676', margin: '0 0 16px' }
const text = { fontSize: '15px', color: '#3d3a4a', lineHeight: '1.6', margin: '0 0 16px' }
const signoff = { fontSize: '14px', color: '#55575d', margin: '28px 0 0' }
