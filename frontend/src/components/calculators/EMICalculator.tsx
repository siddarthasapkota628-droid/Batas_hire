import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, DollarSign, Calendar, Percent } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('10.5');
  const [tenure, setTenure] = useState('60');
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const ratePerMonth = parseFloat(interestRate) / (12 * 100);
    const numberOfMonths = parseInt(tenure);

    if (principal && ratePerMonth && numberOfMonths) {
      const emiValue = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) / 
                      (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);
      
      const totalAmountValue = emiValue * numberOfMonths;
      const totalInterestValue = totalAmountValue - principal;

      setEmi(Math.round(emiValue));
      setTotalAmount(Math.round(totalAmountValue));
      setTotalInterest(Math.round(totalInterestValue));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">EMI Calculator</h2>
          <p className="text-xl text-muted-foreground">Calculate your monthly installments instantly</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-primary" />
              Loan Details
            </h3>

            <div className="space-y-6">
              <div>
                <Label htmlFor="loanAmount" className="text-sm font-medium text-foreground">
                  Loan Amount (₹)
                </Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="pl-10"
                    placeholder="Enter loan amount"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {['100000', '500000', '1000000', '2000000'].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      size="sm"
                      onClick={() => setLoanAmount(amount)}
                      className="text-xs"
                    >
                      {parseInt(amount) >= 100000 ? `${parseInt(amount)/100000}L` : amount}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="interestRate" className="text-sm font-medium text-foreground">
                  Interest Rate (% per annum)
                </Label>
                <div className="relative mt-2">
                  <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="pl-10"
                    placeholder="Enter interest rate"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tenure" className="text-sm font-medium text-foreground">
                  Loan Tenure (months)
                </Label>
                <div className="relative mt-2">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="tenure"
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="pl-10"
                    placeholder="Enter tenure in months"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {['12', '24', '36', '60', '84'].map((months) => (
                    <Button
                      key={months}
                      variant="outline"
                      size="sm"
                      onClick={() => setTenure(months)}
                      className="text-xs"
                    >
                      {months}M
                    </Button>
                  ))}
                </div>
              </div>

              <Button onClick={calculateEMI} className="w-full" size="lg">
                Calculate EMI
              </Button>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">EMI Breakdown</h3>

            {emi > 0 ? (
              <div className="space-y-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Monthly EMI</p>
                  <p className="text-4xl font-bold text-primary">{formatCurrency(emi)}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Principal Amount</p>
                    <p className="text-lg font-semibold text-foreground">{formatCurrency(parseInt(loanAmount))}</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                    <p className="text-lg font-semibold text-accent">{formatCurrency(totalInterest)}</p>
                  </div>
                </div>

                <div className="text-center p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total Amount Payable</p>
                  <p className="text-2xl font-bold text-foreground">{formatCurrency(totalAmount)}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground">Payment Breakdown</p>
                  <div className="relative">
                    <div className="flex rounded-lg overflow-hidden h-4">
                      <div 
                        className="bg-primary" 
                        style={{ width: `${(parseInt(loanAmount) / totalAmount) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-accent" 
                        style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Principal ({Math.round((parseInt(loanAmount) / totalAmount) * 100)}%)</span>
                      <span>Interest ({Math.round((totalInterest / totalAmount) * 100)}%)</span>
                    </div>
                  </div>
                </div>

                <Button variant="cta" className="w-full">
                  Apply for This Loan
                </Button>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Enter loan details and click "Calculate EMI" to see results</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;