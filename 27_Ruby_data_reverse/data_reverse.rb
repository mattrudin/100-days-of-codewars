# origin: https://www.codewars.com/kata/569d488d61b812a0f7000015/train/ruby
def data_reverse(data)
    data.each_slice(8).to_a.reverse.flatten
end
