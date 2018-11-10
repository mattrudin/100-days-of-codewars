# origin: 
def gimme(input_array)
    3 - input_array.index(input_array.max) - input_array.index(input_array.min)
end

# alternative solution:
def gimme(input)
    input.index(input.sort[1])
end