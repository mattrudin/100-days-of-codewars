# origin: https://www.codewars.com/kata/53d6387b83db278202000802/train/ruby
def liftoff(instructions)
	instructions.sort { |a, b| b <=> a }.push("liftoff!").join(" ")
end

# alternative solution:
def liftoff(instructions)
    instructions.sort.reverse.join(' ') + ' liftoff!'
  end