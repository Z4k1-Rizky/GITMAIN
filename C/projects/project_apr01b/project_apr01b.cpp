#include<iostream>
using namespace std;
int main()
{
   cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl;
    cout<<"Nama  :Muhammad Zaki Rizky Parinduri"<<endl;
    cout<<"Kelas :X TKJ 5"<<endl;
    cout<<"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"<<endl<<endl;
    
    
    int pilih;
    cout<<"|≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈|"<<endl;
    cout<<"|Menu Milkshake & Coffee|"<<endl;
    cout<<"|≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈|"<<endl;
    cout<<"|1.Milkshake Coklat     |"<<endl;
    cout<<"|2.Milkshake Strawberry |"<<endl;
    cout<<"|3.Milkshake Vanilla    |"<<endl;
    cout<<"|4.Coffee Expresso      |"<<endl;
    cout<<"|5.Coffee Mager         |"<<endl;
    cout<<"|≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈|"<<endl<<endl;
    cout<<"Silahkan Pilih Nomor Menu: ";
    cin>>pilih;
    if(pilih==1)
    { 
        cout<<"Anda Pesan Milkshake Coklat"<<endl;
        cout<<"Terima Kasih Sudah Memesan";
    }
    else if(pilih==2)
    {
        cout<<"Anda Pesan Milkshake Strawberry"<<endl;
        cout<<"Terima Kasih Sudah Memesan";
    }
    else if(pilih==3)
    {
        cout<<"Anda Pesan Milkshake Vanilla"<<endl;
        cout<<"Terima Kasih Sudah Memesan";
    }
    else if(pilih==4)
    {
        cout<<"Anda Pesan Coffee Expresso"<<endl;
     cout<<"Terima Kasih Sudah Memesan";
    }
    else if(pilih==5)
    {
    cout<<"Anda Pesan Coffee Mager"<<endl;
        cout<<"Terima Kasih Sudah Memesan";
}
    else
    {
        cout<<"Maaf,Menu Tidak Tersedia";
    }

   return 0;
}