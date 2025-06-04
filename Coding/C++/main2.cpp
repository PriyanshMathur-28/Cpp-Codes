#include<bits/stdc++.h>
using namespace std;
class Node{
    public:
    int data;
    Node *left;
    Node *right;
    Node(int val)
    {
        data = val;
        left = nullptr;
        right = nullptr;
    }
};
int main()
{
    Node *root = new Node(1);
    Node *root1 = new Node(2);
    root->left = root1;
    cout<<root->data<<endl;
    return 0;
}