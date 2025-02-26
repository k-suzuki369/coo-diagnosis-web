import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const COODiagnosis = dynamic(() => Promise.resolve(DiagnosisComponent), {
  ssr: false,
});

function DiagnosisComponent() {
  const questions = [
    "CEOが日々の業務に忙殺され、戦略を考える時間が取れていない",
    "意思決定が社長に集中し、他の経営メンバーが意見を出しづらい",
    "新規採用や組織拡大のスピードが速すぎて、管理が追いつかない",
    "経営層と現場の間をつなぐ管理職が不足している",
    "部門ごとの業務フローが明確でなく、属人的な運営になっている",
    "新規事業や事業拡大に伴い、新しいリーダーが育っていない",
    "成長スピードに合わせた評価制度や報酬制度が整備されていない",
    "チームのパフォーマンスを最大化するための仕組みが欠けている",
    "経営層の負担が大きく、戦略策定が後回しになっている",
    "新規事業や海外展開を考えているが、既存事業のマネジメントで手一杯"
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleResponse = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = responses.reduce((acc, val) => acc + (val !== null ? val : 0), 0);
  let feedback = "";
  if (score <= 6) feedback = "✅ COOはまだ不要ですが、今後の成長に応じて検討すると良いでしょう。";
  else if (score <= 12) feedback = "⚠️ COOの導入を検討すべきフェーズです。今のうちに準備を進めることが望ましいでしょう。";
  else feedback = "🚨 いますぐCOOを導入しないと、組織の成長が鈍化するリスクが高いです！";

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
    >
      <motion.div 
        className="max-w-3xl p-8 bg-white shadow-2xl rounded-2xl text-primary"
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }} 
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">COO診断チェックリスト</h1>
        {!submitted ? (
          <div>
            {questions.map((q, index) => (
              <motion.div 
                key={index} 
                className="mb-6 border-b pb-4"
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: index * 0.1 }} 
              >
                <p className="text-lg font-medium text-gray-700">{q}</p>
                <div className="mt-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }} 
                    className={`mr-2 p-3 rounded-lg transition-all duration-300 ${
                      responses[index] === 2
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-200 hover:bg-green-500 hover:text-white"
                    }`}
                    onClick={() => handleResponse(index, 2)}
                  >
                    はい
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mr-2 p-3 rounded-lg transition-all duration-300 ${
                      responses[index] === 1
                        ? "bg-yellow-500 text-white shadow-md"
                        : "bg-gray-200 hover:bg-yellow-400 hover:text-white"
                    }`}
                    onClick={() => handleResponse(index, 1)}
                  >
                    どちらかといえばはい
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      responses[index] === 0
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-gray-200 hover:bg-red-500 hover:text-white"
                    }`}
                    onClick={() => handleResponse(index, 0)}
                  >
                    いいえ
                  </motion.button>
                </div>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="mt-6 w-full p-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
            >
              診断結果を見る
            </motion.button>
          </div>
        ) : (
          <motion.div className="text-center" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold text-gray-800">診断結果</h2>
            <p className="mt-4 text-lg">{feedback}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default COODiagnosis;
