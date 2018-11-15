# origin: https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/ruby
def min_value(digits)
    digits.uniq.sort.join("").to_i
end

# alternative solution
def min_value(digits)
    digits.uniq.sort.join.to_i
end
  