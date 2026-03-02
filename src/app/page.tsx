import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-neutral-light">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-primary">
          MCR Educational
        </h1>
        <p className="text-lg text-neutral-dark/70">
          Empowering Young People Through Dance, Education & Support
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
