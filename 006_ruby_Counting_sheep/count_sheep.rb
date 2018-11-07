# origin: https://www.codewars.com/kata/54edbc7200b811e956000556
def countSheeps(array)
    sheep_counter = 0
    array.each do |sheep| 
      sheep == true ? sheep_counter += 1 : 0
    end
    return sheep_counter
end

# alternative solution:
def countSheeps array
    array.count(true)
end