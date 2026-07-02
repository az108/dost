package de.silvamed.drdost.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.SiteContent

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun InfoScreen(content: SiteContent, onNavigate: (String) -> Unit) {
    Scaffold(topBar = { TopAppBar(title = { Text("Info") }) }) { padding ->
        LazyColumn(contentPadding = padding) {
            item {
                ListItem(
                    headlineContent = { Text("Sprechzeiten") },
                    supportingContent = { Text(content.praxis.hours) },
                )
                HorizontalDivider()
            }
            item {
                ListItem(
                    headlineContent = { Text("Impressum") },
                    modifier = Modifier.clickable { onNavigate("info/impressum") },
                )
                HorizontalDivider()
            }
            item {
                ListItem(
                    headlineContent = { Text("Datenschutz") },
                    modifier = Modifier.clickable { onNavigate("info/datenschutz") },
                )
                HorizontalDivider()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LegalScreen(title: String, paragraphs: List<String>, onBack: () -> Unit) {
    Scaffold(topBar = {
        TopAppBar(
            title = { Text(title) },
            navigationIcon = {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Zurück")
                }
            },
        )
    }) { padding ->
        LazyColumn(contentPadding = padding, modifier = Modifier.padding(horizontal = 16.dp)) {
            items(paragraphs) { paragraph ->
                Text(paragraph, Modifier.padding(top = 16.dp))
            }
            item { Spacer(Modifier.height(24.dp)) }
        }
    }
}
