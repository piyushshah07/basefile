import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-semibold text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Contact Horizontal Service Desk & other details
          <code className="font-mono font-bold"></code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://horizontal.atlassian.net/servicedesk/customer/portal/3"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/hztl.png"
              alt="Horizontal Logo"
              className="dark:invert"
              width={50}
              height={20}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/client1.png"
          alt="Horizontal Logo"
          width={250}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full gap-5 lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Contant Details{' '}
            
          </h2>
          <p className={`m-0 max-w-[40ch] text-sm opacity-75`}>
          USA: +1 573-535-5403<br />
          UAE: +971 800-0130005<br />
          INDIA: 1800 419 8161<br />
          Email: incident@horizontalintegration.com<br />
          </p>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            SLA Details{' '}
            
          </h2>
          <p className={`m-0 max-w-[40ch] text-sm opacity-75`}>
          P1 - 30 minutes<br />
          P2 - 4 hours<br />
          P3 - 24 hours<br />
          P4 - 40 hours<br />
          </p>
        </a>
        <a
          //href="https://horizontal.atlassian.net/servicedesk/customer/user/requests?page=1&reporter=all&statuses=open"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Team{' '}
            
          </h2>
          <p className={`m-0 max-w-[40ch] text-sm opacity-75`}>
          Ariel Villanea - avillanea@horizontal.com<br />
          Harsha Mogili - smogili@horizontal.com<br />
          Mickail Ranapurwala - mranapurwala@horizontal.com<br />
          Vishal Shah - vshah@horizontal.com<br />
          </p>
        </a>
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Home Page{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-75`}>
            Go Back to Home Page
          </p>
        </a>
        
      </div>
    </main>
  )
}
