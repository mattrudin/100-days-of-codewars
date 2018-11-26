# origin: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/ruby
def alphabet_position(text)
    abc = [nil,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    text.split("").collect {|element| abc.index(element.downcase)}.compact.join(" ")
end

# alternative solution
def alphabet_position(text)
    text.upcase.tr('^A-Z', '').chars.map { |c| c.ord - 64 }.join(' ')
end  