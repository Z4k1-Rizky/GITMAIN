#Define the main function
def main():

    #Initialize the account balance
    balance = 1000
    
    #initialize the pin
    pin = 1234
    
    #Confirm the pin
    print("ATM")
    enteredpin = int(input("Enter PIN number: "))
    
    #PIN check
    if enteredpin == pin:
        
    #Display the main menu
        print("ATM")
        print("1. Check balance")
        print("2. Withdraw funds")
        print("3. Deposit funds")
        print("4. Quit")
        choice = int(input("Enter choice : "))
    
    #Perform the selected action
    
    #To show Balance
        if choice == 1:
            print("Your balance is $" + str(balance))
    
    #Widthdraw funds
        elif choice == 2:
            amount = int(input("Enter amount to withdraw: "))
            if amount > balance:
                print("Insufficient funds")
            else:
                balance -= amount
                print("Your new balance is $" + str(balance))
            
    #Deposit funds
        elif choice == 3:
            amount = int(input("Enter amount to deposit: "))
            balance += amount
            print("Your new balance is $" + str(balance))
        
    #Quit the program
        elif choice == 4:
            print("Thank you for using the ATM.")
            
    #For unregistered command
        else:
            print("Invalid Choice.")

    #Wrong pin input
    else:
        print('Wrong pin.')
#Call the main function
main()
             
        