import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [progress, setProgress] = useState(0);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100; // cm to meters
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      let cat = '';
      let prog = 0;
      if (bmiValue < 18.5) {
        cat = 'Underweight';
        prog = 20;
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        cat = 'Normal';
        prog = 45;
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        cat = 'Overweight';
        prog = 70;
      } else {
        cat = 'Obese';
        prog = 95;
      }
      
      setCategory(cat);
      setProgress(prog);
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bebas text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        MEASURE
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bebas uppercase tracking-wider mb-2"
              >
                Calculate Your <span className="text-primary">BMI</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-sm mb-8"
              >
                Body Mass Index (BMI) is a simple calculation using a person's height and weight to determine body fat.
              </motion.p>

              <form onSubmit={calculateBMI} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="w-full bg-card border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-primary text-white font-bebas text-xl tracking-wider rounded-lg hover-glow transition-all"
                >
                  Calculate BMI
                </button>
              </form>
            </div>

            <div className="bg-card/50 rounded-2xl p-8 border border-white/5 h-full flex flex-col justify-center">
              {bmi !== null ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Your Result</div>
                  <div className="text-7xl font-bebas text-primary mb-2">{bmi}</div>
                  <div className="text-2xl font-bold text-white mb-8">{category}</div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full ${
                        category === 'Normal' ? 'bg-green-500' : 
                        category === 'Underweight' ? 'bg-blue-500' : 
                        category === 'Overweight' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider mb-8">
                    <span>Under</span>
                    <span>Normal</span>
                    <span>Over</span>
                    <span>Obese</span>
                  </div>

                  <p className="text-sm text-gray-400">
                    Visit us for a free fitness assessment and personalized plan to reach your goals.
                  </p>
                </motion.div>
              ) : (
                <div className="text-center opacity-50 flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Enter your height and weight<br/>to see your result</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
