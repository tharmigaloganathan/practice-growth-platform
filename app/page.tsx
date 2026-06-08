import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
    return (
        <main className="min-h-screen bg-stone-50 text-stone-950">
          <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-stone-500">
              Mika Logan Studios
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              A calmer path from first inquiry to first consult.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              A productized growth platform for wellness practices, combining a
              conversion-focused website, guided intake flow, lead tracking, and
              practice-management handoff.
            </p>

            <div className="mt-10 flex gap-4">
              <Button size="lg">Start a consult request</Button>
              <Button variant="outline" size="lg">View dashboard demo</Button>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Convert</CardTitle>
              </CardHeader>
              <CardContent className="text-stone-600">
                Turn website visitors into structured, qualified inquiries with a
                calm guided flow.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Organize</CardTitle>
              </CardHeader>
              <CardContent className="text-stone-600">
                Track new inquiries, lead status, and next steps from a simple
                practitioner dashboard.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Handoff</CardTitle>
              </CardHeader>
              <CardContent className="text-stone-600">
                Route prospective clients into existing tools like Jane, Owl, email,
                or manual workflows.
              </CardContent>
            </Card>
          </section>
        </main>
    )
}

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
