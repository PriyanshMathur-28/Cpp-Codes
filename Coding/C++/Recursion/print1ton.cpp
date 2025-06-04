#include<bits/stdc++.h>
using namespace std;
void printallsubset(vector<int> &arr,vector<int> &ans,int i)
{
    if(i==arr.size())
    {
        for(auto it:ans)
        {
            cout<<it<<" ";
        }
        cout<<endl;
        return;
    }
    ans.push_back(arr[i]);
    printallsubset(arr,ans,i+1);
    ans.pop_back();
    printallsubset(arr,ans,i+1);
}
int main()
{
    vector<int> arr={1,2,3};
    vector<int> ans;
    printallsubset(arr,ans,0);
    return 0;
}