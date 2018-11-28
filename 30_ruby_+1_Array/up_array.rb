# origin: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/ruby
def up_array(arr)
    arr.empty? || arr.min < 0 || arr.max > 9 ? nil : (arr.join.to_i + 1).to_s.split("").map {|char| char.to_i}
  end

# alternative solution
def up_array(arr)
    return nil if arr.empty? || arr.any? { |x| x < 0 || x > 9 }
    arr.join.next.chars.map(&:to_i)
  end