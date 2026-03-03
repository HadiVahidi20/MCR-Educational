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

interface ReferralNotificationProps {
  referenceNumber: string;
  referrerName: string;
  referrerEmail: string;
  referrerSchool: string;
  ypFirstName: string;
  ypLastName: string;
  ypDOB: string;
  reasonForReferral: string;
}

export default function ReferralNotification({
  referenceNumber,
  referrerName,
  referrerEmail,
  referrerSchool,
  ypFirstName,
  ypLastName,
  ypDOB,
  reasonForReferral,
}: ReferralNotificationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        New referral received — {referenceNumber} for {ypFirstName} {ypLastName}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerHeading}>New Referral Received</Heading>
            <Section style={badgeWrapper}>
              <Text style={badge}>{referenceNumber}</Text>
            </Section>
          </Section>

          {/* Details grid */}
          <Section style={detailsSection}>
            <table style={table} cellPadding={0} cellSpacing={0}>
              <tbody>
                {/* Referrer details */}
                <tr>
                  <td colSpan={2} style={sectionHeaderCell}>
                    Referrer Details
                  </td>
                </tr>
                <tr>
                  <td style={labelCell}>Reference</td>
                  <td style={valueCell}>
                    <Text style={monoValue}>{referenceNumber}</Text>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <td style={labelCell}>Referrer</td>
                  <td style={valueCell}>
                    {referrerName}{" "}
                    <Link href={`mailto:${referrerEmail}`} style={emailLink}>
                      ({referrerEmail})
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={labelCell}>School</td>
                  <td style={valueCell}>{referrerSchool}</td>
                </tr>

                {/* Young person details */}
                <tr>
                  <td colSpan={2} style={sectionHeaderCell}>
                    Young Person Details
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <td style={labelCell}>Young Person</td>
                  <td style={valueCell}>
                    {ypFirstName} {ypLastName}
                  </td>
                </tr>
                <tr>
                  <td style={labelCell}>Date of Birth</td>
                  <td style={valueCell}>{ypDOB}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Reason for referral */}
          <Section style={reasonSection}>
            <Text style={reasonLabel}>Reason for Referral</Text>
            <Section style={quoteBlock}>
              <Text style={quoteText}>{reasonForReferral}</Text>
            </Section>
          </Section>

          {/* Action button */}
          <Section style={actionSection}>
            <Link href="/admin" style={actionButton}>
              View in Admin Panel
            </Link>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerNote}>
              This is an automated internal notification. Do not reply to this
              email. Log in to the admin panel to manage this referral.
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
  padding: "28px 40px 24px",
  textAlign: "center",
};

const headerHeading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0 0 16px 0",
};

const badgeWrapper: React.CSSProperties = {
  textAlign: "center",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "rgba(46, 205, 167, 0.20)",
  color: "#2ECDA7",
  fontFamily: '"Courier New", Courier, monospace',
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "2px",
  padding: "6px 14px",
  borderRadius: "20px",
  border: "1px solid rgba(46, 205, 167, 0.40)",
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

const sectionHeaderCell: React.CSSProperties = {
  backgroundColor: "#1E3A5F",
  color: "#ffffff",
  fontSize: "11px",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
  padding: "8px 16px",
};

const labelCell: React.CSSProperties = {
  padding: "11px 16px",
  fontSize: "13px",
  fontWeight: "600",
  color: "#6B7280",
  width: "140px",
  borderBottom: "1px solid #E5E7EB",
  verticalAlign: "top",
};

const valueCell: React.CSSProperties = {
  padding: "11px 16px",
  fontSize: "14px",
  color: "#111827",
  borderBottom: "1px solid #E5E7EB",
  verticalAlign: "top",
};

const monoValue: React.CSSProperties = {
  fontFamily: '"Courier New", Courier, monospace',
  fontSize: "14px",
  fontWeight: "700",
  color: "#1E3A5F",
  margin: 0,
};

const emailLink: React.CSSProperties = {
  color: "#1E3A5F",
  textDecoration: "underline",
};

const reasonSection: React.CSSProperties = {
  padding: "24px 40px 0",
};

const reasonLabel: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#6B7280",
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  margin: "0 0 10px 0",
};

const quoteBlock: React.CSSProperties = {
  backgroundColor: "#F7F8FC",
  borderLeft: "4px solid #1E3A5F",
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

const actionSection: React.CSSProperties = {
  padding: "28px 40px 8px",
  textAlign: "center",
};

const actionButton: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#2ECDA7",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "12px 28px",
  borderRadius: "6px",
  letterSpacing: "0.3px",
};

const divider: React.CSSProperties = {
  borderColor: "#E5E7EB",
  margin: "20px 40px 0",
};

const footer: React.CSSProperties = {
  padding: "16px 40px 28px",
};

const footerNote: React.CSSProperties = {
  color: "#9CA3AF",
  fontSize: "12px",
  lineHeight: "1.6",
  margin: 0,
  textAlign: "center",
};
