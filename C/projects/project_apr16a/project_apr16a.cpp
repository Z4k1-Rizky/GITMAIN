#include <iostream>
using namespace std;
int main()
{
   int nilai;
    cout<<"Masukkan nilai anda";
    cin>>nilai;
    if (nilai == 100)
    {
     cout<<"Nilai anda = A";
    }
        else if (nilai > 60)
    {
      cout<<"Nilai anda = B";
    }
        else if (nilai > 30)
    {
        cout<<"Nilai anda = C";
    }
    else 
    {
    cout<<" boo";
    }

  return 0;
   }
