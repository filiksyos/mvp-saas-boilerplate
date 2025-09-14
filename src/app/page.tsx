
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-800 dark:to-gray-900">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          Launch your MVP with a solid foundation
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          A modern boilerplate with Next.js, TypeScript, Tailwind CSS, and more. Get started in minutes and focus on building your product.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="#pricing">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="https://github.com/filiksyos/mvp-saas-boilerplate" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              GitHub
            </Button>
          </a>
        </div>
      </div>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Starter</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">For individuals and small teams</p>
              <p className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">$10<span className="text-lg font-normal">/mo</span></p>
              <Button className="w-full" onClick={() => localStorage.setItem('plan', 'Starter')}>Choose Plan</Button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-2 border-primary">
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Pro</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">For growing businesses</p>
              <p className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">$40<span className="text-lg font-normal">/mo</span></p>
              <Button className="w-full" onClick={() => localStorage.setItem('plan', 'Pro')}>Choose Plan</Button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Enterprise</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">For large scale applications</p>
              <p className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">Contact us</p>
              <Button className="w-full" variant="outline" onClick={() => localStorage.setItem('plan', 'Enterprise')}>Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
