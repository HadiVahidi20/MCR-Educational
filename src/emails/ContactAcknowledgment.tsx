import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
  Preview,
} from "@react-email/components";

interface ContactAcknowledgmentProps {
  name: string;
  message: string;
}

export default function ContactAcknowledgment({
  name,
  message,
}: ContactAcknowledgmentProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        We&apos;ve received your message and will be in touch shortly.
      </Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerHeading}>MCR Educational</Heading>
            <Text style={headerTagline}>Empowering Young People</Text>
          </Section>

          {/* Body */}
          <Section style={bodySection}>
            <Text style={paragraph}>Dear {name},</Text>
            <Text style={paragraph}>
              Thank you for getting in touch with MCR Educational. We have
              received your message and a member of our team will respond within
              one working day.
            </Text>
            <Text style={paragraph}>Here&apos;s a copy of your message:</Text>
            <Section style={quoteBlock}>
              <Text style={quoteText}>{message}</Text>
            </Section>
            <Text style={paragraph}>
              If your matter is urgent, please call us on{" "}
              <Link href="tel:01611234567" style={link}>
                0161 123 4567
              </Link>
              .
            </Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              &copy; 2025 MCR Educational &mdash;{" "}
              <Link href="https://www.mcreducational.co.uk" style={footerLink}>
                www.mcreducational.co.uk
              </Link>
            </Text>
            <Text style={footerText}>
              MCR Educational is committed to safeguarding and promoting the
              welfare of children and young people. All staff and volunteers are
              subject to enhanced DBS checks.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#F0F2F5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: 0,
  padding: "24px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  maxWidth: "600px",
  margin: "0 auto",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const header: React.CSSProperties = {
  backgroundColor: "#1E3A5F",
  padding: "32px 40px",
  textAlign: "center",
};

const headerHeading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 6px 0",
  letterSpacing: "-0.3px",
};

const headerTagline: React.CSSProperties = {
  color: "rgba(255,255,255,0.75)",
  fontSize: "14px",
  margin: 0,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
};

const bodySection: React.CSSProperties = {
  padding: "36px 40px 28px",
};

const paragraph: React.CSSProperties = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 0 16px 0",
};

const quoteBlock: React.CSSProperties = {
  backgroundColor: "#F7F8FC",
  borderLeft: "4px solid #1E3A5F",
  borderRadius: "0 4px 4px 0",
  padding: "16px 20px",
  margin: "4px 0 24px",
};

const quoteText: React.CSSProperties = {
  color: "#4B5563",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const link: React.CSSProperties = {
  color: "#1E3A5F",
  fontWeight: "600",
  textDecoration: "underline",
};

const divider: React.CSSProperties = {
  borderColor: "#E5E7EB",
  margin: "0 40px",
};

const footer: React.CSSProperties = {
  padding: "24px 40px 32px",
};

const footerText: React.CSSProperties = {
  color: "#9CA3AF",
  fontSize: "12px",
  lineHeight: "1.6",
  margin: "0 0 8px 0",
  textAlign: "center",
};

const footerLink: React.CSSProperties = {
  color: "#9CA3AF",
  textDecoration: "underline",
};
