import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-stone-50">
      <header className="row-start-1">
        <p className="text-x font-semibold">感谢你的捐赠~</p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4 items-center sm:items-start">
        <Image
          className=""
          src="/zfbpay.jpg"
          alt="支付宝收款码"
          width={200}
          height={600}
          priority
        />
        <Image
          className=""
          src="/wxpay.jpg"
          alt="微信收款码"
          width={200}
          height={600}
          priority
        />

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-x font-semibold">若有任何疑问，请联系<span className="text-green-500">微信😊：consistency_liu</span></p>
      </footer>
    </div>
  );
}
