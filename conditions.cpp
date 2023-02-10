#include <iostream>
using namespace std;
int main()
{
    int savings;
    cin >> savings;
    if (savings > 1000)
    {
        cout << "sokina";
    }
    else if (savings > 500)
    {
        cout << "morjina";
    }
    else
    {
        cout << "friends";
    }
}