#include <iostream>
using namespace std;
int main()
{
   cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Nama  :Muhammad Zaki Rizky Parinduri"<<endl;
    cout<<"Kelas :X TKJ 5"<<endl;
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl<<endl;
    
    
    int total;
    cout<<"Input Total Belanja: ";
    cin>>total;
    if(total>100000)
    {
        cout<<"DAPAT PIRING CANTIK";
    }
     else if(total>=80000)
     {
        cout<<"DAPAT GELAS";
    }
    else if(total<80000)
    {
        cout<<"TERIMA KASIH";
    }

 return 0;
}