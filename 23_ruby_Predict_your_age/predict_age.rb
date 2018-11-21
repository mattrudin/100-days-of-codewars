# orign: https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/ruby
def predict_age(*args)
    Integer.sqrt(args.map{|element| element*element}.sum) / 2
  end

# alternative solution
def predict_age(*ages)
    (ages.map { |x| x*x } .sum**0.5 / 2).to_i # **0.5 is not declaritive. It means the square root of the number
  end