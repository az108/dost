package de.silvamed.drdost.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.Topic

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopicListScreen(title: String, topics: List<Topic>, onOpen: (Topic) -> Unit) {
    Scaffold(topBar = { TopAppBar(title = { Text(title) }) }) { padding ->
        LazyColumn(contentPadding = padding) {
            items(topics, key = { it.slug }) { topic ->
                Column(
                    Modifier
                        .fillMaxWidth()
                        .clickable { onOpen(topic) }
                        .padding(horizontal = 16.dp, vertical = 12.dp)
                ) {
                    Text(topic.title, style = MaterialTheme.typography.titleMedium)
                    Text(
                        topic.excerpt,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                        maxLines = 3,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.padding(top = 4.dp),
                    )
                }
                HorizontalDivider()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopicDetailScreen(topic: Topic?, onBack: () -> Unit) {
    Scaffold(topBar = {
        TopAppBar(
            title = {
                Text(topic?.title ?: "Nicht gefunden", maxLines = 1, overflow = TextOverflow.Ellipsis)
            },
            navigationIcon = {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Zurück")
                }
            },
        )
    }) { padding ->
        if (topic == null) return@Scaffold
        LazyColumn(contentPadding = padding, modifier = Modifier.padding(horizontal = 16.dp)) {
            item {
                AssetImage(
                    path = topic.image,
                    contentDescription = topic.imageAlt ?: topic.title,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(220.dp)
                        .clip(RoundedCornerShape(16.dp)),
                )
            }
            items(topic.body) { paragraph ->
                Text(paragraph, Modifier.padding(top = 16.dp))
            }
            item { Spacer(Modifier.height(24.dp)) }
        }
    }
}
