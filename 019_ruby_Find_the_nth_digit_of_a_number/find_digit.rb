# origin: https://www.codewars.com/kata/577b9960df78c19bca00007e/train/ruby
def find_digit(num, nth)
    nth <= 0 ? -1 : num.to_s.split("").reverse[nth-1].to_i
  end

# alternative solution:
def find_digit(num, nth)
    nth < 1 ? -1 : num.abs.to_s[-nth].to_i
end