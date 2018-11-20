# origin: https://www.codewars.com/kata/5569b10074fe4a6715000054/train/ruby
def count(array)
    Hash[array.uniq.map{|item| [item, array.count(item)]}]
end

# alternative solution
def count(array)
    array.map{|item| [item, array.count[item]]}.to_h
end