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

interface ReferralConfirmationProps {
  referrerName: string;
  referenceNumber: string;
  ypFirstName: string;
}

export default function ReferralConfirmation({
  referrerName,
  referenceNumber,
  ypFirstName,
}: ReferralConfirmationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        Your referral has been received — reference {referenceNumber}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerOrgName}>MCR Educational</Text>
            <Heading style={headerHeading}>Referral Received</Heading>
          </Section>

          {/* Body */}
          <Section style={bodySection}>
            <Text style={paragraph}>Dear {referrerName},</Text>
            <Text style={paragraph}>
              Thank you for submitting a referral for {ypFirstName}. We have
              received your referral and assigned the following reference number:
            </Text>

            {/* Reference number block */}
            <Section style={refBlock}>
              <Text style={refNumber}>{referenceNumber}</Text>
            </Section>

            <Text style={paragraph}>
              Please keep this reference number safe — you will need it if you
              contact us to follow up.
            </Text>

            {/* What happens next */}
            <Heading as="h2" style={subHeading}>
              What happens next:
            </Heading>

            <table style={listTable} cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td style={stepNumber}>1.</td>
                  <td style={stepText}>
                    Our admissions team will review your referral within one
                    working day.
                  </td>
                </tr>
                <tr>
                  <td style={stepNumber}>2.</td>
                  <td style={stepText}>
                    We will contact you by phone or email to discuss next steps.
                  </td>
                </tr>
                <tr>
                  <td style={stepNumber}>3.</td>
                  <td style={stepText}>
                    Once accepted, we will arrange a transition meeting.
                  </td>
                </tr>
              </tbody>
            </table>

            <Hr style={innerDivider} />

            <Text style={paragraph}>
              If you need to follow up, please quote your reference number and
              contact us at:
            </Text>
            <Text style={contactDetails}>
              Phone:{" "}
              <Link href="tel:01611234567" style={contactLink}>
                0161 123 4567
              </Link>
              {"  |  "}
              Email:{" "}
              <Link href="mailto:info@mcreducational.co.uk" style={contactLink}>
                info@mcreducational.co.uk
              </Link>
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
              welfare of children and young people.
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

const headerOrgName: React.CSSProperties = {
  color: "rgba(255,255,255,0.75)",
  fontSize: "13px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  margin: "0 0 8px 0",
};

const headerHeading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "26px",
  fontWeight: "700",
  margin: 0,
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

const refBlock: React.CSSProperties = {
  backgroundColor: "rgba(46, 205, 167, 0.10)",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  margin: "8px 0 24px",
};

const refNumber: React.CSSProperties = {
  color: "#1E3A5F",
  fontFamily: '"Courier New", Courier, monospace',
  fontSize: "28px",
  fontWeight: "700",
  letterSpacing: "3px",
  margin: 0,
};

const subHeading: React.CSSProperties = {
  color: "#1E3A5F",
  fontSize: "16px",
  fontWeight: "700",
  margin: "8px 0 16px 0",
};

const listTable: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "0 0 20px 0",
};

const stepNumber: React.CSSProperties = {
  color: "#2ECDA7",
  fontSize: "15px",
  fontWeight: "700",
  verticalAlign: "top",
  paddingRight: "12px",
  paddingBottom: "10px",
  width: "24px",
};

const stepText: React.CSSProperties = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  verticalAlign: "top",
  paddingBottom: "10px",
};

const innerDivider: React.CSSProperties = {
  borderColor: "#E5E7EB",
  margin: "20px 0",
};

const contactDetails: React.CSSProperties = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 8px 0",
};

const contactLink: React.CSSProperties = {
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
