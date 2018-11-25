# origin: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/ruby
def find_it(seq)
    i = 0
    odd_number = 0
    while i < seq.size do
      seq.count(seq[i]).odd? ? odd_number = seq[i] : false
      i += 1
    end
    odd_number
  end
  
# alternative solution
def find_it(seq)
    seq.detect { |n| seq.count(n).odd? }
  end