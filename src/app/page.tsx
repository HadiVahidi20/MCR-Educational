import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8" style={{ backgroundColor: '#F7F8FC' }}>
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold" style={{ color: '#1E3A5F' }}>
          MCR Educational
        </h1>
        <p className="text-lg" style={{ color: '#1A1A2E', opacity: 0.7 }}>
          Empowering Young People Through Dance, Education &amp; Support
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/dev/styleguide">View Style Guide</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
