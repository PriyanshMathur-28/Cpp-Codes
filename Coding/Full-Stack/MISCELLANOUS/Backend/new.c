# include <stdio.h>
int main ()
{
int n;
printf("Enter the number of processes: ");
scanf("%d", &n);
int pno[10], at[10], burst[10], tat[10], wt[10], obt[10];
for (int i = 0; i < n; i++)
{
at[i] = 0;
}
printf("Enter burst time of each processes: \n");
for (int i = 0; i < n; i++)
{
pno[i] = i + 1;
printf("Enter burst time of P%d: ", i + 1); scanf("%d", &burst[i]);
obt[i] = burst[i];
}
for (int i = 0; i < n; i++)
{
for (int j = i + 1; j < n; j++)
{
if (burst[j] < burst[i])
{
int temp = burst[i];
burst[i] = burst[j];
burst[j] = temp;
temp = obt[i];
obt[i] = obt[j];
obt[j] = temp;
temp = pno[i];
pno[i] = pno[j];
pno[j] = temp;
}
}
}
for (int i = 0; i < n; i++)
{
tat[i] = burst[i] - at[i];
burst[i + 1] = burst[i + 1] + burst[i];
}
int tottat = 0, totwt = 0;
for (int i = 0; i < n; i++)
{
tottat += tat[i];
totwt += tat[i] - obt[i];
}
printf("Process\tTAT\tWT\n");
for (int i = 0; i < n; i++)
{
printf("P%d\t%d\t%d\n", pno[i], tat[i], tat[i] - obt[i]);
}
printf("Total turn around time: %d\n",tottat);
printf("Total waiting time: %d\n",totwt);
printf("Average turn around time: %f\n",((float)tottat/n));
printf("Average waiting time: %f\n",((float)totwt/n));
return 0;
}