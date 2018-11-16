# origin: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/ruby
def find(number)
    accumulator = 0
    counter = 1
    while counter <= number
      counter % 3 == 0 || counter % 5 == 0 ? accumulator += counter : nil
      counter += 1
    end
    accumulator
  end

# alternative solution
def find(number)
    (3..number).select{ |integer| (integer % 3).zero? || (integer % 5).zero? }.reduce(:+)
  end