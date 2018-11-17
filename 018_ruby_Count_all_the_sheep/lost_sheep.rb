# origin: https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/ruby
def lost_sheep(friday,saturday,total)
    total - (friday.sum + saturday.sum)
  end

# alternative solution
def lost_sheep(*days, total)
    total - days.flatten.reduce(0, :+)
  end