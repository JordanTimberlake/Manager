<script setup>
import { onMounted } from 'vue';
import { Network, DataSet } from 'vis-network/standalone/esm/vis-network';

definePageMeta({
    //   middleware: 'auth',
});

onMounted(() => {
    const nodes = new DataSet([
        {
            id: 1,
            label: 'CEO',
            shape: 'circularImage', // Can be 'dot', 'circle', 'box', 'ellipse', 'circularImage', etc.
            image: '/images/CV_PicLQuality.jpg', // Path to an image for the node
            size: 30, // Size of the node
            color: {
                border: '#2B7CE9',
                background: '#97C2FC',
                highlight: {
                    border: '#2B7CE9',
                    background: '#D2E5FF',
                },
                hover: {
                    border: '#2B7CE9',
                    background: '#D2E5FF',
                },
            },
            font: {
                size: 14, // Size of the label text
                face: 'Tahoma', // Font face
                align: 'center',
                color: '#FFFFFF', // Label color
            },
            borderWidth: 2,
        },
        {
            id: 2,
            label: 'Manager 1',
            shape: 'circle',
            size: 25,
            color: '#FFA500', // Orange
            font: {
                size: 14,
                color: '#FFFFFF',
            },
            borderWidth: 2,
        },
        {
            id: 3,
            label: 'Manager 2',
            shape: 'circle',
            size: 25,
            color: '#FFA500', // Orange
            font: {
                size: 14,
                color: '#FFFFFF',
            },
            borderWidth: 2,
        },
        {
            id: 4,
            label: 'Employee 1',
            shape: 'circle',
            size: 20,
            color: '#32CD32', // LimeGreen
            font: {
                size: 14,
                color: '#FFFFFF',
            },
            borderWidth: 2,
        },
        {
            id: 5,
            label: 'Employee 2',
            shape: 'circle',
            size: 20,
            color: '#32CD32', // LimeGreen
            font: {
                size: 14,
                color: '#FFFFFF',
            },
            borderWidth: 2,
        },
    ]);

    const edges = new DataSet([
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
    ]);

    const container = document.getElementById('network');
    const data = { nodes, edges };
    const options = {
        layout: {
            hierarchical: {
                direction: 'UD', // 'UD' for up-down, 'LR' for left-right
                sortMethod: 'directed',
            },
        },
        physics: true, // Disable physics for a more static layout
    };

    new Network(container, data, options);
});
</script>

<template>
    <div>
        <h1>Employee Hierarchy</h1>
        <div id="network"></div>
    </div>
</template>

<style scoped>
#network {
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 80%;
    height: 400px;
    margin: 0 auto;
}
</style>
