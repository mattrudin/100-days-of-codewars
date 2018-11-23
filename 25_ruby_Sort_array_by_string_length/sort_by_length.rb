# origin: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/ruby
def sort_by_length(arr)
    arr.sort_by! {|element| element.length}
  end
# alternative solution
def sort_by_length(arr)
    arr.sort_by(&:length)
  end