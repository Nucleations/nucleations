import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props { name?: string }

const ContactSubmitterConfirmation = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to Nucleations</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{name ? `Thank you, ${name}!` : 'Thank you for reaching out!'}</Heading>
        <Text style={text}>
          We've received your message and someone from the Nucleations team will be in touch shortly with the most relevant next step.
        </Text>
        <Text style={text}>
          In the meantime, if anything urgent comes up, you can reply directly to this email and we'll get back to you.
        </Text>
        <Text style={signoff}>— The Nucleations team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactSubmitterConfirmation,
  subject: 'Thanks for contacting Nucleations',
  displayName: 'Contact form — submitter confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '40px 28px' }
const h1 = { fontSize: '24px', fontWeight: 700, color: '#3a0676', margin: '0 0 16px' }
const text = { fontSize: '15px', color: '#3d3a4a', lineHeight: '1.6', margin: '0 0 16px' }
const signoff = { fontSize: '14px', color: '#55575d', margin: '28px 0 0' }
