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

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  role: string;
  organisation?: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  role,
  organisation,
  message,
}: ContactNotificationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerHeading}>New Contact Form Submission</Heading>
            <Text style={headerSubtext}>
              Received via mcreducational.co.uk
            </Text>
          </Section>

          {/* Details Table */}
          <Section style={detailsSection}>
            <table style={table} cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td style={labelCell}>Name</td>
                  <td style={valueCell}>{name}</td>
                </tr>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <td style={labelCell}>Email</td>
                  <td style={valueCell}>
                    <Link href={`mailto:${email}`} style={emailLink}>
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={labelCell}>Phone</td>
                  <td style={valueCell}>{phone ?? "Not provided"}</td>
                </tr>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <td style={labelCell}>Role</td>
                  <td style={valueCell}>{role}</td>
                </tr>
                <tr>
                  <td style={labelCell}>Organisation</td>
                  <td style={valueCell}>{organisation ?? "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Message */}
          <Section style={messageSection}>
            <Text style={messageLabel}>Message</Text>
            <Section style={quoteBlock}>
              <Text style={quoteText}>{message}</Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Footer note */}
          <Section style={footerSection}>
            <Text style={footerNote}>
              Do not reply to this email. To respond, reply directly to{" "}
              <Link href={`mailto:${email}`} style={emailLink}>
                {email}
              </Link>{" "}
              or log in to the{" "}
              <Link href="/admin" style={adminLink}>
                admin panel
              </Link>
              .
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
  backgroundColor: "#E85D75",
  padding: "28px 40px",
  textAlign: "center",
};

const headerHeading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0 0 4px 0",
};

const headerSubtext: React.CSSProperties = {
  color: "rgba(255,255,255,0.8)",
  fontSize: "13px",
  margin: 0,
};

const detailsSection: React.CSSProperties = {
  padding: "28px 40px 0",
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  border: "1px solid #E5E7EB",
  borderRadius: "6px",
  overflow: "hidden",
};

const labelCell: React.CSSProperties = {
  padding: "12px 16px",
  fontSize: "13px",
  fontWeight: "600",
  color: "#6B7280",
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  width: "140px",
  borderBottom: "1px solid #E5E7EB",
  verticalAlign: "top",
};

const valueCell: React.CSSProperties = {
  padding: "12px 16px",
  fontSize: "14px",
  color: "#111827",
  borderBottom: "1px solid #E5E7EB",
  verticalAlign: "top",
};

const messageSection: React.CSSProperties = {
  padding: "24px 40px 0",
};

const messageLabel: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#6B7280",
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  margin: "0 0 10px 0",
};

const quoteBlock: React.CSSProperties = {
  backgroundColor: "#F7F8FC",
  borderLeft: "4px solid #E85D75",
  borderRadius: "0 4px 4px 0",
  padding: "16px 20px",
};

const quoteText: React.CSSProperties = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const emailLink: React.CSSProperties = {
  color: "#E85D75",
  textDecoration: "underline",
};

const adminLink: React.CSSProperties = {
  color: "#E85D75",
  fontWeight: "600",
  textDecoration: "underline",
};

const divider: React.CSSProperties = {
  borderColor: "#E5E7EB",
  margin: "24px 40px 0",
};

const footerSection: React.CSSProperties = {
  padding: "16px 40px 28px",
};

const footerNote: React.CSSProperties = {
  color: "#9CA3AF",
  fontSize: "12px",
  lineHeight: "1.6",
  margin: 0,
  textAlign: "center",
};
