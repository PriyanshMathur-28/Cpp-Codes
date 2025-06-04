#include<bits/stdc++.h>
using namespace std;
class Node{
    public:
    int data;
    Node *next;
    Node(int x1)
    {
        data=x1;
        next=nullptr;
    }
};
Node *covertarr2LL(vector<int> &arr)
{
    Node *head=new Node (arr[0]);
    Node *mover=head;
    for(int i=1;i<arr.size();i++)
    {
        Node *temp=new Node(arr[i]);
        mover->next=temp;
        mover=mover->next;
    }
    return head;
};

Node *RemoveElement(Node *head,int value)
{
    if(head==NULL)
        return NULL;

    if(value==head->data)
    {
        head=head->next;
        return head;
    }
    Node *temp=head;
    Node *prev=nullptr;
    while(temp!=nullptr)
    {
        if(value==temp->data)
        {
            prev->next=temp->next;
            delete temp;
            return head;
        }
        prev=temp;
        temp=temp->next;
    }
    return head;
}

Node *insertatEnd(Node *head,int value)
{
    if(head==NULL)
        return new Node(value);
    Node *temp=new Node(value);
    Node *mover=head;
    while(mover->next!=nullptr)
        mover=mover->next;
    mover->next=temp;
    temp->next=nullptr;
    return head ;
}
int main()
{
    vector<int> arr={1,2,3,4,5};
    Node *head=covertarr2LL(arr);

    
    // Node *mover=insertatHead(head,12);   
    Node *mover1=insertatEnd(head,9);   

    while(mover1!=nullptr)

    {
        cout<<mover1->data<<" ";
        mover1=mover1->next;
    }
    
    return 0;
}