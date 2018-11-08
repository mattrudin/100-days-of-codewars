# origin: https://www.codewars.com/kata/546e2562b03326a88e000020
def square_digits num
    string = num.to_s
    num_array = string.each_char.map {|char| char.to_i}
    squared_array = []
    num_array.each {|number| squared_array << number**2}
    squared_array.join.to_i
  end

# alternative solution:
def square_digits num
    num.to_s.chars.map{|char| char.to_i**2}.join.to_i
  end