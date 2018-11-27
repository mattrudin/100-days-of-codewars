# origin: https://www.codewars.com/kata/5264d2b162488dc400000001/train/ruby

def spinWords(string)
    string.split(" ").collect {|element| element.length >= 5 ? element.reverse : element}.join(" ")
end

# alternative solution
def spinWords(string)
    string.gsub(/\w{5,}/, &:reverse)
end