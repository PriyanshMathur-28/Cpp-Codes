// SELF WRITTEN CODE

#include<bits/stdc++.h>
using namespace std;
void fractionalknapsack(vector<int> &value, vector<int> &weight,int capacity)
{
    vector<pair<double,int>> ratio_index;
    for(int i=0;i<value.size();i++)
    {
        ratio_index.push_back({value[i]/weight[i],i});
    }
    sort(ratio_index.begin(),ratio_index.end(),[&](auto &ratio, auto &index)
    {
       return ratio.first>index.first; 
    });
    for(int i=0;i<value.size();i++)
    {
        cout<<ratio_index[i].first<<" "<<ratio_index[i].second<<endl;
    }
    int total_val=0;
    int remaining=capacity;
    for(int i=0;i<ratio_index.size();i++)
    {
        if(weight[ratio_index[i].second]<=remaining)
        {
            total_val+=value[ratio_index[i].second];
            remaining=remaining-weight[ratio_index[i].second];
        }
        else if(remaining<weight[ratio_index[i].second])
        {
            total_val+=ratio_index[i].first*remaining;
            break;  
        }
    }
    cout<<endl;
    cout<<"Total value is : "<<total_val;
    return;
}
int main()
{
    vector<int> value={500};
    vector<int> weight={30};
    int capacity=10;
    fractionalknapsack(value,weight,capacity);
    return 0;
}