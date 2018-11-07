# origin: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/ruby

# solution
def makeNegative(num)
    if num == 0
      return 0
    elsif num < 0
      return num
    else
      return num - (num*2)
    end
   end

# alternative solution
def makeNegative(num)
    num > 0 ? -num : num
  end
#or
def makeNegative(num)
    -num.abs
  end