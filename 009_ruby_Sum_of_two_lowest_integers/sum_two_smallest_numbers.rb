# origin: https://www.codewars.com/kata/558fc85d8fd1938afb000014 
def sum_two_smallest_numbers(numbers)
    numbers.sort[0] + numbers.sort[1] 
  end

#alternative solution
def sum_two_smallest_numbers(numbers)
    numbers.min(2).inject(:+)
end