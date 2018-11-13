# origin: https://www.codewars.com/kata/short-long-short/train/ruby
def solution(a, b)
    '#{a.lenght > b.lenght ? b : a}#{a.lenght > b.lenght ? a : b}#{a.lenght > b.lenght ? b : a}'
  end

# alternative solution
def solution(a, b)
    a<b ? a+b+a : b+a+b
  end