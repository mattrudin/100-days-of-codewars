# origin: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/ruby

def sum_array(arr)
    if arr == nil || arr.empty? || arr.length == 2 || arr.length == 1
      return 0
    else
      highest_value_index = arr.index(arr.max)
      arr.delete_at(highest_value_index)    
      lowest_value_index = arr.index(arr.min)
      arr.delete_at(lowest_value_index)
      counter = 0
      arr.each { |value| counter += value }
      counter
    end
  end

# alternative solution
def sum_array(arr)
    arr.nil? || arr.empty? ? 0 : arr.sort[1..-2].reduce(0, :+)
  end