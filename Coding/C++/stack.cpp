#include<bits/stdc++.h>
using namespace std;
#define size 5
void push(vector<int> &arr, int value)
{
    if(arr.size()==size)
    {
        cout<<"Stack is Full";
        return;
    }
    else{
        arr.push_back(value);
    }
    return;
}
int main()
{
    vector<int> arr={1,2,3};
    push(arr,10);
    for(int i=0;i<arr.size();i++)
    {
        cout<<arr[i]<<" ";
    }
    return 0;
}