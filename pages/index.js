import dynamic from "next/dynamic";

const COODiagnosis = dynamic(() => import("../components/COODiagnosis"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <COODiagnosis />
    </div>
  );
}
