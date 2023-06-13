#include<iostream>
using namespace std;
int main()
{
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Nama  :Muhammad Zaki Rizky Parinduri"<<endl;
    cout<<"Kelas :X TKJ 5"<<endl;
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl<<endl;

    
    int totalbelanja;
    cout<<"Masukkan Total Belanja: "<<endl;
    cin>>totalbelanja;
    if (totalbelanja>=100000)
    {
        cout<<"Mendapat discount 10%";
    }
     else
    {
        cout<<"Tidak mendapat discount";
    }
    
    return 0;
}