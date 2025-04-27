import SignDetection from "./SignDetection"

const SignLanguage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="">
          <h2 className="pt-5 font-ubuntu tracking-wider text-3xl font-semibold text-primary">How it works</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-5 border-b border-white/10 pb-10">
          <div className="border border-white/10 p-3 space-y-3 rounded-xl">
            <h4 className="text-lg font-geist tracking-wider flex items-center gap-3 text-primary font-semibold"><span className="border border-white/10 rounded-full text-xs py-1 px-3">01</span> Enable Camera</h4>
            <p className="font-ubuntu tracking-wide text-white/30">Allow access to your webcam for real-time sign detection.</p>
          </div>
          <div className="border border-white/10 p-3 space-y-3 rounded-xl">
            <h4 className="text-lg font-geist tracking-wider flex items-center gap-3 text-primary font-semibold"><span className="border border-white/10 rounded-full text-xs py-1 px-3">02</span>Perform Signs</h4>
            <p className="font-ubuntu tracking-wide text-white/30">Show a sign gesture in front of the camera.</p>
          </div>
          <div className="border border-white/10 p-3 space-y-3 rounded-xl">
            <h4 className="text-lg font-geist tracking-wider flex items-center gap-3 text-primary font-semibold"><span className="border border-white/10 rounded-full text-xs py-1 px-3">03</span>Get Translation</h4>
            <p className="font-ubuntu tracking-wide text-white/30">The system will recognize and display the meaning of your sign.</p>
          </div>
        </div>
      </div>
      <div className="py-10 relative">
        <div className="dotted-bg absolute inset-0 z-[-1]" />
        <div className="container mx-auto px-4 md:px-0">
          <SignDetection />
        </div>
      </div>
    </div>
  )
}
export default SignLanguage